type Props = {
  title: string
}

export default function Title(props: Props) {
  return (
    <div className="text-primary-dark font-bold text-2xl leading-10">
      {props.title}
    </div>
  )
}
