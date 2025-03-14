import React from "react";
import { Text } from "../../atoms/Text";


interface QuoteBoxProps {
  quote: string;
  author: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {

  return (
    <div className="container flex mb-5 max-sm:text-sm" data-aos="fade-right">
      <div className="border-l-4 pl-4">
        <div className="border border-gray-400 p-4">
          <p className="italic text-white text-md md:text-lg">{quote}</p>
          <Text className="mt-2 text-right text-sm md:text-sm">- {author}</Text>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
