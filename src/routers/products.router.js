import express from 'express';
import Products from '../schemas/product.schema.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// 상품 생성 API
router.post('/', asyncHandler(async (req, res) => {
  const { name, description, manager, password, status } = req.body;
  const createdAt = new Date();
  const updatedAt = new Date();

  const createdProducts = await Products.create({
    name,
    description,
    manager,
    password,
    status,
    createdAt,
    updatedAt,
  });

  const { password: _, __v: __, ...resProducts } = createdProducts.toObject();

  return res
    .status(201)
    .json({ message: '상품 생성에 성공했습니다.', goods: resProducts });
}));

// 상품 목록 조회 API
router.get('/', asyncHandler(async (req, res) => {
  const productsItem = await Products.find()
    .sort('-createdAt')
    .select('-password -__v')
    .exec();

  return res
    .status(200)
    .json({ message: '상품 목록 조회에 성공했습니다.', productsItem });
}));

// 상품 상세 조회 API
router.get('/:productsId', asyncHandler(async (req, res) => {
  const { productsId } = req.params;

  const findProducts = await Products.findById(productsId)
    .select('-password -__v')
    .exec();

  if (!findProducts) {
    return res
      .status(404)
      .json({ errorMessage: '상품이 존재하지 않습니다.', products: [] });
  }

  return res.status(200).json({
    message: '상품 상세 조회에 성공했습니다.',
    products: findProducts,
  });
}));

// 상품 삭제 API
router.delete('/:productsId', asyncHandler(async (req, res) => {
  const { productsId } = req.params;
  const { password } = req.body;

  const findProducts = await Products.findById(productsId).exec();

  if (!findProducts) {
    return res
      .status(404)
      .json({ errorMessage: '상품이 존재하지 않습니다.' });
  }

  if (password !== findProducts.password) {
    return res
      .status(401)
      .json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
  }

  await Products.deleteOne({ _id: productsId });
  return res.status(200).json({
    message: '상품 삭제에 성공했습니다',
    id: productsId,
  });
}));

// 상품 수정 API
router.put('/:productsId', asyncHandler(async (req, res) => {
  const { productsId } = req.params;
  const { name, description, manager, status, password } = req.body;

  const targetProducts = await Products.findById(productsId).exec();

  if (!targetProducts) {
    return res
      .status(404)
      .json({ errorMessage: '상품이 존재하지 않습니다.' });
  }

  if (password !== targetProducts.password) {
    return res
      .status(401)
      .json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
  }

  targetProducts.name = name;
  targetProducts.description = description;
  targetProducts.manager = manager;
  targetProducts.status = status;
  targetProducts.password = password;
  targetProducts.updatedAt = new Date();

  await targetProducts.save();

  const { password: _, __v: __, ...resProducts } = targetProducts.toObject();

  return res.status(200).json({
    message: '상품 수정에 성공했습니다.',
    products: resProducts,
  });
}));

export default router;
