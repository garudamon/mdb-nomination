type MovieListProps = {
  children: React.ReactElement | React.ReactNode;
  layoutClass?: string;
};

const MovieList = ({ children, layoutClass = "" }: MovieListProps) => {
  return <ul className={`grid ${layoutClass}`}>{children}</ul>;
};

export default MovieList;
