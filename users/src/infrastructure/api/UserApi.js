import { User } from "../../domain/entities/User";

export const fetchUsersFromApi = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json"
  );
  const data = await response.json();
  return data.map((user) => new User(user));
};
