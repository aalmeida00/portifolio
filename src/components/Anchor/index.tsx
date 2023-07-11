interface IAnchor {
  href: string,
  children: React.ReactNode,
  [key: string]: any
}

const Anchor = ({ href, children, props }: IAnchor) => 
  <a href={href} {...props} className="underline text-[color:var(--quaternary)] decoration-[color:var(--quaternary)]">{children}</a>

export default Anchor
