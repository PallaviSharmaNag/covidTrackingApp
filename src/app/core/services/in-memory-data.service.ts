import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { INews } from 'src/app/shared/interfaces/INews';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 
  createDb() {

    /** Default User data collection. */
    const adminDetail: IUser[] = [{
      "id": 1,
      "username": "pallavi",
      "password": "pallavi"
    }, {
      "id": 2,
      "username": "admin",
      "password": "admin"
    }];

    const newsDetail: INews[] = [{     
      "id": 1,
      "title": "Covid-19: 69 new cases, death toll now at 103",
      "description": "PETALING JAYA: Malaysia reported 69 more Covid-19 cases on Friday (May 1), which brings the total number of infections in the country to 6,071.",
      "summary": "Malaysia also discharged 39 more patients in the same 24-hour span, which means 4,210 patients have recovered from Covid-19 since the outbreak began. Malaysia’s Covid-19 recovery rate is now at 69.3% out of the total number of positive cases.",
      "fullnews": "There are only 1,758 active cases being treated at the country’s health facilities at present, and there are currently 37 patients being treated at intensive care units (ICU), while there are 14 cases on ventilator support. Dr Noor Hisham also announced one new death, which brings the country's death toll to 103. The 103rd fatality was that of case 5,441, who was a 66-year-old Malaysian male with a history of cancer. He had a history of close contact with a Covid-19 patient, case 4,818 and he was admitted to Hospital Kuala Lumpur on April 14 and was confirmed to have passed away on April 30. Malaysia is currently under the conditional movement control order (MCO), as announced by Prime Minister Tan Sri Muhyiddin Yassin on Friday morning."
    }, 
    {
      "id": 2,
      "title": "UK government criticized over coronavirus testing claims",
      "description": "Matt Hancock, the UK's Health Secretary, proudly announced on Friday that the country had hit an ambitious coronavirus testing target that it had set itself at the beginning of the month. ",
      "summary": "On April 2, after weeks of criticism that the UK was lagging behind its European counterparts like Germany on testing, Hancock told the nation that he was 'setting the goal of 100,000 tests per day, by the end of this month. That is the goal and I am determined that we will get there.'",
      "fullnews": "Today, Hancock said from that same podium that the UK had beaten that goal by more than 22,000. Striking an upbeat tone, Hancock said: 'I knew it was an audacious goal, but we needed an audacious goal.' Critics might point out that the goal wasn't the only thing to come out of Hancock's mouth that could be called audacious. In the numbers counted, thousands of tests have been sent out to members of the public, but not necessarily returned. Jonathon Ashworth, the opposition Labour party's shadow health secretary, has already issued a statement, accusing the government of fiddling the numbers. 'Increasing testing is an important milestone. But many would have expected the 100,000 promise to have been met by actually carrying out testing, not simply because 39,000 kits had been mailed out.' The issue of testing didn't need to become so political."

    }];

    return {adminDetail, newsDetail};
  }

/** Method that generates the ids of users when not passed. */
  genId<T extends IUser | INews>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}
