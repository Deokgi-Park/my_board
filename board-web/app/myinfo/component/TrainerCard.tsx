interface TrainerCardProps {
  image: string;
  name: string;
  createdAt: string;
  email: string;
}
export default function TrainerCard({
  image,
  name,
  createdAt,
  email,
}: TrainerCardProps) {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} className="trainer-image" />
      <div className="trainer-details">
        <h2 className="trainer-name">{name}</h2>
        <p className="trainer-email">이메일: {email}</p>
        <p className="trainer-createdAt">생성일: {createdAt}</p>
      </div>
    </div>
  );
}
