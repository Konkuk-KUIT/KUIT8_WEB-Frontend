import { useNavigate } from 'react-router-dom';
import OrderSummaryBar from '../OrderSummaryBar';
import { selectSubtotal, useCartStore } from '../../stores/useCartStore';

const OrderBar = () => {
  const navigate = useNavigate();
  const subtotal = useCartStore(selectSubtotal);
  const isEmpty = useCartStore((state) => state.items.length === 0);

  return <OrderSummaryBar totalPrice={subtotal} disabled={isEmpty} onOrder={() => navigate('/cart')} />;
};

export default OrderBar;
