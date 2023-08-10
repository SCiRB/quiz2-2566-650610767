export const PostOwner = ({
  OwnerImagePath,
  OwnerName,
  OwnerText,
  OwnerLikeNum,
}) => {
  return <div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img src ={OwnerImagePath} width="48" height="48" className="rounded-circle"style={{ objectFit: "cover" }}></img>
      <span className="fw-semibold fs-5">{OwnerName}</span>
    </div>
    <span>{OwnerText}</span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span className="text-muted">{OwnerLikeNum}</span>
    </div>
    <hr className="m-0 border" />
  </div>;
};
