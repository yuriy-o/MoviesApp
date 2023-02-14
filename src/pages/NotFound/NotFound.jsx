import image404 from './404.jpg';

export const NotFound = () => {
  return (
    <div>
      <img src={image404} alt="Page not found" loading="lazy" />
    </div>
  );
};
