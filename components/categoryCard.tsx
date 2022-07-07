type Props = {
  category: string
}

export default function CategoryCard(props: Props) {
   return (
    <div className="py-1 px-2 w-fit bg-primary-pale text-primary-dark rounded-sm shadow-sm">
      {props.category}
    </div>
   ) 
}