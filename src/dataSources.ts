import { starships, crewMembers } from './data.json';
import {CrewMember, Starship} from "./interfaces";

export class StarshipAPI {
    starships: Starship[];
    crewMembers: CrewMember[];
    constructor() {
    this.starships = starships;
    this.crewMembers = crewMembers;
    }

    getStarships() {
        return this.starships;
    }

    getStarshipById(id) {
        return this.starships.find(starship => starship.id === id);
    }

    addStarship(starship) {
        const newStarship = {
            id: `${this.starships.length + 1}`,
            ...starship,
            crew: []
        };
        this.starships.push(newStarship);
        return newStarship;
    }

    getCrewMembers() {
        return this.crewMembers;
    }

    getCrewMemberById(id) {
        return this.crewMembers.find(crewMember => crewMember.id === id);
    }

    addCrewMember(crewMember) {
        const newCrewMember = {
            id: `${this.crewMembers.length + 1}`,
            ...crewMember
        };
        this.crewMembers.push(newCrewMember);

        const starship = this.starships.find(starship => starship.id === crewMember.starshipId);
        if (starship) {
            starship.crew.push(newCrewMember.id);
        }

        return newCrewMember;
    }

    deleteStarship(id: string) {
        const index = this.starships.findIndex(starship => starship.id === id);
        if (index !== -1) {
            this.starships.splice(index, 1);
            return true;
        }
        return false;
    }

    deleteCrewMember(id: string) {
        const index = this.crewMembers.findIndex(crewMember => crewMember.id === id);
        if (index !== -1) {
            const crewMember = this.crewMembers.splice(index, 1)[0];
            const starship = this.starships.find(starship => starship.id === crewMember.starshipId);
            if (starship) {
                starship.crew = starship.crew.filter(crewId => crewId !== id);
            }
            return true;
        }
        return false;
    }
}
