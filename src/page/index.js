import withSplitting from '../lib/hoc/withSplitting';

export const Login = withSplitting(()=>import('./_Login'));
export const Home = withSplitting(()=>import('./_Home'));
export const Cs = withSplitting(()=>import('./_Cs'));
export const Products = withSplitting(()=>import('./_Products'));
export const Detail = withSplitting(()=>import('./_Detail'));
export const Register = withSplitting(()=>import('./_Register'));
export const Cart = withSplitting(()=>import('./_Cart'));