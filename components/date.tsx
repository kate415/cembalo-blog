import { parseISO, format } from 'date-fns'

type Props = {
  date: string
}

export default function Date(props: Props) {
  return (
    <div>
      <time dateTime={props.date} className="text-primary-light text-lg tracking-widest">
        {format(parseISO(props.date), 'yyyy.MM.dd')}
      </time>
    </div>
  )
}
