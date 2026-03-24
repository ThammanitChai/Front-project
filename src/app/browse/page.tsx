{selectedSpace && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-white w-[800px] rounded-xl p-8">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">
        Reserve a Room
      </h2>

      {/* Space name */}
      <p className="text-gray-500 text-lg mb-6">
        Space: {selectedSpace.name}
      </p>

      {/* Date label */}
      <p className="text-gray-500 text-lg mb-2">
        Select Date
      </p>

      {/* Date input */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full h-[70px] border rounded-lg px-4 text-lg mb-8"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-4">

        <button
          onClick={() => setSelectedSpace(null)}
          className="px-6 py-3 border rounded-lg text-gray-400"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!date) {
              alert("Please select date")
              return
            }

            alert("Reservation Confirmed ✅")
            setSelectedSpace(null)
          }}
          className="px-8 py-3 bg-blue-900 text-white rounded-lg"
        >
          Confirm Reservation
        </button>

      </div>

    </div>

  </div>
)}