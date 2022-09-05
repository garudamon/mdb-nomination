import { useCallback } from "react";
import { useStore } from "@/stores";
import { MovieItem } from "@/stores/models";

type ListItemProps = { movie: MovieItem } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const MovieItems = ({ ...props }: ListItemProps) => {
  const { indexNominated, toggleNominated } = useStore();

  const toggleItem = useCallback(() => {
    toggleNominated(props.movie);
  }, [props.movie]);
  return (
    <article className="flex items-start space-x-6 p-6">
      <img
        src={props.movie.Poster}
        alt=""
        width="60"
        height="88"
        className="flex-none rounded-md bg-slate-100"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 dark:text-white truncate pr-20">
          {props.movie.Title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div>
            <dt className="sr-only">Year</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600 dark:text-slate-300">
              {props.movie.Year}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center capitalize text-gray-400 font-light">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {props.movie.Type}
            </dd>
          </div>
        </dl>
        <div className="absolute top-0 right-0">
          {indexNominated(props.movie) < 0 && (
            <button
              className="px-2 font-regular text-sm rounded-md  text-slate-900 dark:text-slate-300 dark:hover:text-teal-300 hover:text-teal-500"
              type="button"
              onClick={toggleItem}
              data-testid={`set-nominated-${props.movie.imdbID}`}
            >
              <svg
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <g
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinejoin="round"
                >
                  <path d="M4 15.667v-10.667c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v10.667c0 .726-.394 1.396-1.029 1.748l-6 3.333c-.604.336-1.339.336-1.943 0l-6-3.333c-.634-.353-1.028-1.022-1.028-1.748Z"></path>
                  <path d="M10.802 13.909l.83-.436c.231-.121.507-.121.738 0l.83.436c.268.141.591.117.835-.061l.31-.225c.244-.177.366-.478.316-.775l-.159-.924c-.044-.257.041-.52.228-.702l.671-.654c.216-.211.294-.526.201-.813l-.118-.364c-.093-.287-.341-.496-.64-.54l-.928-.135c-.258-.037-.481-.2-.597-.434l-.415-.841c-.135-.27-.411-.441-.713-.441h-.383c-.302 0-.578.171-.711.442l-.415.841c-.116.234-.339.397-.597.434l-.927.134c-.299.044-.547.253-.64.54l-.118.364c-.093.287-.016.602.201.813l.671.654c.187.182.272.445.228.702l-.159.924c-.051.298.072.598.316.775l.31.225c.244.177.567.201.835.061Z"></path>
                </g>
                <rect width="24" height="24" fill="none"></rect>
              </svg>
            </button>
          )}

          {indexNominated(props.movie) > -1 && (
            <button
              className="px-2 font-regular text-sm rounded-md  text-rose-300 hover:text-red-500"
              type="button"
              onClick={toggleItem}
              data-testid={`remove-nominated-${props.movie.imdbID}`}
            >
              <svg
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  d="M6 9v10l2.30926e-14 3.01992e-07c1.66785e-07 1.10457.895431 2 2 2h8l-8.74228e-08-7.10543e-15c1.10457 4.82823e-08 2-.89543 2-2v-10m-4 1v7m-4-7v7m-5.5-11h15m-11.5 0l.544-1.632 1.1981e-08-3.59718e-08c.272144-.817086 1.03679-1.36821 1.898-1.368h3.116l3.75414e-08-4.65716e-11c.861951-.00106928 1.62762.550215 1.9 1.368l.542 1.632"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinejoin="round"
                ></path>
                <rect width="24" height="24" fill="none"></rect>
              </svg>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default MovieItems;
