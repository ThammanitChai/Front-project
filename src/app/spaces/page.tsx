import SpaceCardPanel from "@/components/SpacePanel"

export default function Spaces () {
    return (
        <main className="min-h-screen bg-background px-6 py-10">
            <div>
                <h1 className="text-5xl font-extrabold">Co-Working Spaces</h1>
                <p className="text-gray-500 text-xl mt-3">Find and reserve your ideal workspace</p>
            </div>
            <div className="m-2 flex flex-row flex-wrap justify-around content-around">
                      <SpaceCardPanel spaceName="GoodHub" spaceImg="/space1.jpg" spaceLocate="123 Innovation Drive, Downtown" spaceOPCL="06:00 - 00:00" spaceTel="098-567-3214" />
                      <SpaceCardPanel spaceName="ThinkSpace" spaceImg="/space2.jpg" spaceLocate="456 Creative Blvd, Midtown"  spaceOPCL="24 HRS" spaceTel="087-656-4537"/>
                      <SpaceCardPanel spaceName="9 OClock Square" spaceImg="/space3.jpg" spaceLocate="789 Startup Lane, Eastside" spaceOPCL="07:00 – 23:00" spaceTel="065-346-2123" />
            
            </div>


        </main>
    )
}