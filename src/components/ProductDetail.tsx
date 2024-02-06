import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectFilteredProducts } from '../features/products/productsSlice';
import { AppDispatch } from '../app/store';

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(parseInt(productId)));
    }
  }, [dispatch, productId]);

  if (!product) {
    return <div>Loading...</div>; // or a loading spinner, etc.
  }

  return (
    <div className="container mx-auto mt-10">
      {/* 상품 상세 정보를 여기에 표시 */}
    </div>
  );
}

export default ProductDetail;
