const DEFAULT_SORT_ID = 'popularity.desc';

const SortTypes = [
  {
    id: 'popularity.desc',
    name: 'Популярность, по убыванию',
  },
  {
    id: 'popularity.asc',
    name: 'Популярность, по возрастанию',
  },
  {
    id: 'vote_average.desc',
    name: 'Оценка, по убыванию',
  },
  {
    id: 'vote_average.asc',
    name: 'Оценка, по возрастанию',
  },
  {
    id: 'title.desc',
    name: 'Название, по убыванию',
  },
  {
    id: 'title.asc',
    name: 'Название, по возрастанию',
  },
  {
    id: 'release_date.desc',
    name: 'Дата выхода, по убыванию',
  },
  {
    id: 'release_date.asc',
    name: 'Дата выхода, по возрастанию',
  },
];

export {
  SortTypes,
  DEFAULT_SORT_ID,
};
