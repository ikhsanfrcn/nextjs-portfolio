// type IconProps = {
//   Component: React.ElementType; // Komponen ikon (seperti FaGithub, FaLinkedin)
//   link?: string;
//   target?: string;
//   className?: string;
//   rel?: string;
// };

// export const Icon: React.FC<IconProps> = ({
//   Component,
//   link,
//   target="_blank",
//   rel,
//   className,
// }) => {
//   return (
//     <a
//       href={link}
//       target={target}
//       rel={rel}
//       className={className}
//     >
//       <Component />
//     </a>
//   );
// };

import Link from "next/link";

type IconProps = {
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
  target?: string;
  className?: string;
  rel?: string;
};

export const Icon: React.FC<IconProps> = ({
  Component,
  link,
  target = "_blank",
  rel,
  className,
}) => {
  if (link) {
    return (
      <Link href={link} target={target} rel={rel} className={className}>
        <Component />
      </Link>
    );
  }

  return <Component className={className} />;
};
