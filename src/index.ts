type IdType = string | number;

interface Options {
  field?: string;
}

function reorderList(list: any[], ids: IdType[], options?: Options) {
  return ids.map((id) => {
    const field = options?.field as string;
    return !field ? list[id] : list.find((item) => item[field] === id);
  });
}

export default reorderList;
