import AsyncStorage from "@react-native-async-storage/async-storage";

export type ListDTO = {
  id: number;
  name: string;
  create_at: string;
  budget: number;
};

type List = {
  name: string;
  create_at: string;
  budget: number;
};

const getAll = async () => {
  try {
    const prev = await AsyncStorage.getItem("list");

    if (prev) {
      return JSON.parse(prev) as ListDTO[];
    }

    return [];
  } catch (error) {
    return [];
  }
};

const createList = async ({ budget, create_at, name }: List) => {
  try {
    const list = await getAll();

    const newList = {
      id: Math.floor(Math.random() * 100),
      budget,
      create_at,
      name,
    };

    list.push(newList);

    await AsyncStorage.setItem("list", JSON.stringify(list));

    return newList;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, createList };
