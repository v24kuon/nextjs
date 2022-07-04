import * as style from '../styles/index.module.css';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>test,test</h1>
      <Link href='/contact'>
        <a>コンタクトページに移動</a>
      </Link>
    </>
  );
};
export default Index;
