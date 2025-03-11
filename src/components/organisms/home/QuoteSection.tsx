import { NextPage } from 'next';
import QuoteBox from '../../molecules/home/QuoteBox';

export const QuoteSection: NextPage = () => {
  return (
    <section className='pt-10'>
      <QuoteBox
        quote="First, solve the problem. Then, write the code."
        author="John Johnson"
      />
      <QuoteBox
        quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        author="Martin Fowler"
      />
    </section>
  );
};
