import  './botton.css'
export type IBtype = 'button'| 'submit' | 'reset'
export default function Button(props: { class: number
  text: string; icon:  any | null | undefined; type?: IBtype
}) {
  const {type = 'button'} =props;
  return (
      <button type={type}  className={props.class == 1 ?'primery_btn' : props.class == 2 ?'secondary_btn' : 'primery_btn third'}>
      {props.icon}
      {props.text}
      </button>
  )
}
