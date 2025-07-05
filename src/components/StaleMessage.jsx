const StaleMessage = ({ refetch }) => {
  return (
    <main>
      <div>
        status of the book may have changed...
        <button onClick={refetch}>Get latest data</button>
      </div>
    </main>
  );
};

export default StaleMessage;

export function UpToDate() {
  return <main>The status of the book is up to date</main>;
}

export function BackgroundStaleFetching() {
  return <main>Fetching the latest data....</main>;
}
