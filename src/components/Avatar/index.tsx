import Image from "next/image";

const sizes = {
  small: 64,
  medium: 200,
  large: 360,
}


interface IAvatarProps {
  size?: keyof typeof sizes;
  src: string;
}

const Avatar = ({ size = 'medium', src}: IAvatarProps) => {
  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
      }}
      className="rounded-full overflow-hidden"
    >
      <Image 
        width={sizes[size]}
        height={sizes[size]}
        src={src}
        alt={`Avatar of ${src}`}
        className="rounded-full"
      />
    </div>
  )
}

export default Avatar