

const Icon = ({ className }) => {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.818 17.8601C12.239 23.436 9.10843 30.9945 9.11525 38.8731C9.12206 46.7517 12.2654 54.3049 17.8541 59.8712C22.7551 64.7521 29.2081 67.7762 36.1026 68.4231C42.997 69.0699 49.902 67.2991 55.6291 63.4153L72.0276 79.7757C74.9112 77.4456 77.5421 74.8206 79.8776 71.9437L63.4792 55.5833C67.9262 49.0738 69.5993 41.0685 68.1302 33.3283C66.6611 25.5882 62.1703 18.7473 55.6457 14.3106C49.9135 10.4128 42.9968 8.63435 36.0903 9.28241C29.1839 9.93046 22.7213 12.9643 17.818 17.8601ZM57.1628 35.1637C57.6527 37.5573 57.6653 40.0238 57.1997 42.4222C56.7341 44.8206 55.7997 47.1041 54.4496 49.1421C53.0995 51.1802 51.3602 52.933 49.3311 54.3005C47.3019 55.6679 45.0225 56.6232 42.6233 57.1118C40.1622 57.6132 37.6249 57.6132 35.1638 57.1118C32.7604 56.6274 30.4761 55.6754 28.4415 54.3102C26.4069 52.945 24.6619 51.1933 23.3058 49.1553C21.9498 47.1172 21.0093 44.8326 20.5382 42.4319C20.0672 40.0313 20.0749 37.5615 20.5606 35.1637C21.0462 32.7659 22.0003 30.487 23.3686 28.4572C24.737 26.4273 26.4926 24.6861 28.5354 23.3332C30.5782 21.9803 32.8683 21.0421 35.2745 20.572C37.6808 20.102 40.1563 20.1094 42.5597 20.5939C46.1608 21.3199 49.4673 23.0898 52.0649 25.6819C54.6625 28.2741 56.4358 31.5732 57.1628 35.1661V35.1637Z"
        fill="black"
      />
      <path
        d="M53.3005 77.8195L61.7605 86.2599C51.9061 90.983 40.8254 92.5388 30.0472 90.7127C19.2689 88.8866 9.32433 83.7686 1.58523 76.0647C0.554953 75.0154 -0.0153793 73.6007 -0.000192583 72.1319C0.0149941 70.6631 0.614593 69.2604 1.66634 68.2326C2.70385 67.2184 4.09845 66.6504 5.55096 66.6504C7.00346 66.6504 8.39806 67.2184 9.43557 68.2326C15.0672 73.8413 22.1901 77.7245 29.9632 79.4234C37.7362 81.1222 45.8344 80.5656 53.3005 77.8195Z"
        fill="black"
      />
      <path
        d="M76.1596 1.66093C83.8816 9.38204 89.0116 19.3037 90.8421 30.057C92.6725 40.8103 91.1131 51.8654 86.3789 61.697L77.9189 53.2566C80.6708 45.808 81.2284 37.7292 79.5258 29.9746C77.8231 22.22 73.9315 15.1135 68.3104 9.49478C67.2586 8.46697 66.6592 7.06442 66.6439 5.59562C66.6286 4.12682 67.1985 2.71213 68.2287 1.66274C69.259 0.613435 70.6649 0.0154465 72.1371 0.000295048C73.6094 -0.0148564 75.0273 0.554079 76.079 1.58196C76.1064 1.60869 76.1339 1.63542 76.1607 1.66274L76.1596 1.66093Z"
        fill="black"
      />
    </svg>
  );
};

const Text = ({ className }) => {
  // This logo is in Poppins font
  return (
    <svg
      width="145"
      height="45"
      viewBox="0 0 87 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.336 11.952H7.232V26H2.688V11.952H0.672V8.272H2.688V7.376C2.688 5.2 3.30667 3.6 4.544 2.576C5.78133 1.552 7.648 1.072 10.144 1.136V4.912C9.056 4.89067 8.29867 5.072 7.872 5.456C7.44533 5.84 7.232 6.53333 7.232 7.536V8.272H10.336V11.952ZM29.7193 16.752C29.7193 17.392 29.6766 17.968 29.5913 18.48H16.6313C16.7379 19.76 17.1859 20.7627 17.9753 21.488C18.7646 22.2133 19.7353 22.576 20.8873 22.576C22.5513 22.576 23.7353 21.8613 24.4393 20.432H29.2713C28.7593 22.1387 27.7779 23.5467 26.3273 24.656C24.8766 25.744 23.0953 26.288 20.9833 26.288C19.2766 26.288 17.7406 25.9147 16.3753 25.168C15.0313 24.4 13.9753 23.3227 13.2073 21.936C12.4606 20.5493 12.0872 18.9493 12.0872 17.136C12.0872 15.3013 12.4606 13.6907 13.2073 12.304C13.9539 10.9173 14.9993 9.85067 16.3433 9.104C17.6873 8.35733 19.2339 7.984 20.9833 7.984C22.6686 7.984 24.1726 8.34667 25.4953 9.072C26.8393 9.79733 27.8739 10.832 28.5993 12.176C29.3459 13.4987 29.7193 15.024 29.7193 16.752ZM25.0793 15.472C25.0579 14.32 24.6419 13.4027 23.8313 12.72C23.0206 12.016 22.0286 11.664 20.8553 11.664C19.7459 11.664 18.8073 12.0053 18.0393 12.688C17.2926 13.3493 16.8339 14.2773 16.6633 15.472H25.0793ZM37.4693 2.32V26H32.9893V2.32H37.4693ZM49.2875 21.872L53.7675 8.272H58.5355L51.9755 26H46.5355L40.0075 8.272H44.8075L49.2875 21.872ZM63.3238 6.16C62.5344 6.16 61.8731 5.91467 61.3398 5.424C60.8278 4.912 60.5718 4.28267 60.5718 3.536C60.5718 2.78933 60.8278 2.17067 61.3398 1.68C61.8731 1.168 62.5344 0.911999 63.3238 0.911999C64.1131 0.911999 64.7638 1.168 65.2758 1.68C65.8091 2.17067 66.0758 2.78933 66.0758 3.536C66.0758 4.28267 65.8091 4.912 65.2758 5.424C64.7638 5.91467 64.1131 6.16 63.3238 6.16ZM65.5318 8.272V26H61.0518V8.272H65.5318ZM79.782 8.016C81.894 8.016 83.6007 8.688 84.902 10.032C86.2033 11.3547 86.854 13.2107 86.854 15.6V26H82.374V16.208C82.374 14.8 82.022 13.7227 81.318 12.976C80.614 12.208 79.654 11.824 78.438 11.824C77.2007 11.824 76.2193 12.208 75.494 12.976C74.79 13.7227 74.438 14.8 74.438 16.208V26H69.958V8.272H74.438V10.48C75.0353 9.712 75.7927 9.11467 76.71 8.688C77.6487 8.24 78.6727 8.016 79.782 8.016Z"
        fill="black"
      />
    </svg>
  );
};

const Logo = {
  Icon: Icon,
  Text: Text,
};

export default Logo;
