export default function Logo({compact=false, className=''}){
  return (
    <img
      src="/logo.png"
      alt="Black Five"
      className={`logo ${compact ? 'logo-small' : ''} ${className}`.trim()}
      width="350"
      height="135"
      loading="eager"
      decoding="async"
    />
  );
}

