type Props = {
  spaceName: string
  spaceImg: string
  spaceLocate: string
  spaceOPCL: string
  spaceTel: string
  onBook: () => void
}

export default function SpaceCardPanel({
  spaceName,
  spaceImg,
  spaceLocate,
  spaceOPCL,
  spaceTel,
  onBook
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img src={spaceImg} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{spaceName}</h2>

        <p className="text-gray-500 text-sm">{spaceLocate}</p>
        <p className="text-gray-500 text-sm">{spaceOPCL}</p>
        <p className="text-gray-500 text-sm mb-4">{spaceTel}</p>

        <button
          onClick={onBook}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Book Space
        </button>
      </div>

    </div>
  )
}