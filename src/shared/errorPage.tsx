type Props = {};
const ErrorPage = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex w-4/6 justify-center bg-white p-20">
          <div>
            <p>This page isn't available. Sorry about that</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
