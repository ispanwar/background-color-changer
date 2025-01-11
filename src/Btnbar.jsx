function changeColor(){
    const mybody = document.querySelector('body');
    mybody.style.background-color = "blue"
}
export default function Btnbar() {
  return (
    <>
      <div className="m-10 p-5">
        <button
          className="bg-red-600 mr-5 p-2 rounded-xl"
          onClick={changeColor}
        >
          Red
        </button>
        <button
          className="bg-blue-600 mr-5 p-2 rounded-xl"
          onClick={changeColor}
        >
          Blue
        </button>
        <button
          className="bg-green-600 mr-5 p-2 rounded-xl"
          onClick={changeColor}
        >
          Green
        </button>
        <button
          className="bg-yellow-300 mr-5 p-2 rounded-xl"
          onClick={changeColor}
        >
          Yellow
        </button>
        <button
          className="bg-orange-600 mr-5 p-2 rounded-xl"
          onClick={changeColor}
        >
          Orange
        </button>
      </div>
    </>
  );
}
