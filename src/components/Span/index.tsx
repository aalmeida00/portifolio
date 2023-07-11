

interface ISpan {
  children: React.ReactNode,
  [key: string]: any
}

const Span = ({ children, props }: ISpan) => {
  return (
    <span {...props}>
      {children}
    </span>
  )
}

export default Span