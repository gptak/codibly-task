import useArrows from "./useArrows";

export default function Arrows() {
  const { firstPage, lastPage, isFiltering, handlePrev, handleNext } =
    useArrows();
  return (
    <div>
      <button disabled={firstPage || isFiltering} onClick={handlePrev}>
        Prev
      </button>
      <button disabled={lastPage || isFiltering} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
