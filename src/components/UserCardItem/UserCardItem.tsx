import './UserCardItem.css'

interface IUserCardItem {
  title: string;
  data: string | number | boolean | undefined;
}

export const UserCardItem = ({title, data}: IUserCardItem) => {
  return (
    <p className="userCardItem">
      <b>{title}:</b> {data}
    </p>
  )
}
