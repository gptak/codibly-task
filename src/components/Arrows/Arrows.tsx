import useArrows from "./useArrows";

export default function Arrows() {
  const { page, handlePrev, handleNext, lastPage } = useArrows();
  console.log(page);
  return (
    <div>
      <button disabled={page <= 1} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={lastPage} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
