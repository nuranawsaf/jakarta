import Cards from '@components/home/cards/Cards';
import Header from '@components/home/header/Header';
import HelloWorld from '@components/home/helloWorld/HelloWorld';
import Homes from '@components/home/Home';
import PropertyCard from '@components/home/propertyCard/PropertyCard';
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Cards/>
      <HelloWorld/>
    </div>
  );
};

export default Home;
