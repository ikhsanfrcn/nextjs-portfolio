import { MainTemplate } from '../../components/templates/MainTemplate';

export const metadata = {
    title: "Portfolio | S",
    description: "Portfolio",
    opengraph: {
        url: ""
    }
};
export default function Contact() {
  return (
    <MainTemplate>
      <h2>Contact</h2>
      <p>If you want to get in touch, please feel free to contact me...</p>
    </MainTemplate>
  );
}
