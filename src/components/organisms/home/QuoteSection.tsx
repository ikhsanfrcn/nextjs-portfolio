import { NextPage } from 'next';
import QuoteBox from '../../molecules/home/QuoteBox';

export const QuoteSection: NextPage = () => {
  return (
    <section className='pt-10'>
      <QuoteBox
        quote="The only limit to our realization of tomorrow is our doubts of today."
        author="Franklin D. Roosevelt"
      />
      <QuoteBox
        quote="The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well."
        author="Ralph Waldo Emerson"
      />
    </section>
  );
};
