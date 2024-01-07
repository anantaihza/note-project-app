// import EmptyNotes from "../Skeleton/EmptyNotes";
// import Card from "./Card";
// import PropTypes from "prop-types";

// export default function ListCard({ notes, isLoading }) {
//   return notes.length === 0 ? (
//     <EmptyNotes/>
//   ) : (
//     <div className="base-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
//       {notes.map((note) => (
//         <Card key={note.id} note={note} />
//       ))}
//     </div>
//   );
// }

// ListCard.propTypes = {
//   notes: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

import EmptyNotes from "../Skeleton/EmptyNotes";
import SkeletonCard from "../Skeleton/SkeletonCard";
import Card from "./Card";
import PropTypes from "prop-types";

export default function ListCard({ notes, isLoading }) {
  return isLoading ? (
    <div className="base-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  ) : notes.length === 0 ? (
    <EmptyNotes />
  ) : (
    <div className="base-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
      {notes.map((note) => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  );
}

ListCard.propTypes = {
  notes: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
