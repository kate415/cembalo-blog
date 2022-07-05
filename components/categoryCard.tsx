type Props = {
  category: string
}

export default function CategoryCard(props: Props) {
   return (
    <div className="p-1 w-fit bg-primary-pale text-primary-dark rounded-sm shadow-sm">
      {props.category}
    </div>
   ) 
}