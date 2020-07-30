import withSplitting from '../lib/hoc/withSplitting';

export const Login = withSplitting(()=>import('./_login'));
export const Home = withSplitting(()=>import('./_home'));
export const Cs = withSplitting(()=>import('./_cs'));