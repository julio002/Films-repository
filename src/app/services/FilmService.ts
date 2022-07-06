import * as repository from "../repositories/FilmRepository"

export const getAll = () => {
    return repository.getAll();
}