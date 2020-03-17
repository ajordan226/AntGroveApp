import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Content, Accordion } from 'native-base';

const dataArray = [
  {
    title: 'Mission Statement',
    content:
      'The mission of the National Society of Black Engineers is "to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community." The National Society of Black Engineers strives to accomplish the following objectives for our organization: Stimulate and develop student interest in the various engineering disciplines Strive to increase the number of minority students studying engineering at both the undergraduate and graduate levels Encourage members to seek advanced degrees in engineering or related fields and to obtain professional engineering registrations Promote public awareness of engineering and the opportunities for Blacks and other minorities in that profession Function as a representative body on issues and developments that affect the careers of Black Engineers Innovative project ideas are generated and implemented throughout the year on the chapter, regional and national levels. Some of NSBEs present activities include tutorial programs, group study sessions, high school/junior high outreach programs, technical seminars and workshops, a national communications network (NSBENET), two national magazines (NSBE Magazine and NSBE Bridge), an internal newsletter, a professional newsletter (Career Engineer, a supplement in NSBE Magazine), resume books, career fairs, awards, banquets and an annual national convention.',
  },
  {
    title: 'Core Values',
    content:
      'Acronym: Ex2CEL. Excellence: Develop the skills necessary to become high-performing engineering students and professionals. Exposure: Present opportunities in engineering to a diverse cross-section of the black populace. Community: Create environments that nurture individual growth and collective success. Empathy: Seek a greater understanding of those we serve. Leadership: Groom the future leaders of society through training and executive-level experience.',
  },
  {
    title: 'Vision',
    content:
      'We envision a world in which engineering is a mainstream word in homes and communities of color, and all Black students can envision themselves as engineers. In this world, Blacks exceed parity in entering engineering fields, earning degrees, and succeeding professionally.',
  },
  {
    title: 'History',
    content:
      'Two Purdue University undergraduates, Edward Barnette (now deceased) and Fred Cooper, approached the dean of engineering at Purdue University in 1971 with the concept of starting the Black Society of Engineers (BSE). They wanted to establish a student organization to help improve the recruitment and retention of black engineering students. In the late 1960s, a devastating 80 percent of the black freshmen entering the university’s engineering program were dropping out. The dean agreed to the idea and assigned the only black faculty member on staff, Arthur J. Bond, Ph.D., as advisor. Barnett served as the first president of BSE. The fledgling group gained momentum in 1974, with the direction and encouragement of Dr. Bond and the active participation of the young African-American men whose destiny was to become the founders of NSBE. Now known as “the Chicago Six,” these men were Edward A. Coleman, Anthony Harris, Brian Harris, Stanley L. Kirtley, John W. Logan Jr. and George A. Smith. (Kirtley and Logan are now deceased.) During his term as BSE president, Anthony Harris renamed the organization the Society of Black Engineers (SBE). Encouraged by SBE’s on-campus success, he also took the first steps in the creation of a national organization. He wrote a letter to the college or university presidents and deans of each of the country’s 288 accredited engineering programs, explained the SBE concept and asked them to identify black student leaders, organizations and faculty members who might support the Society’s efforts on a national basis. Approximately 80 schools responded. Many had similar black student organizations with similar objectives. A date was set for the first national meeting, and 48 students representing 32 schools attended the event, which was held at Purdue, April 10–12, 1975. It was at that historic meeting, by majority vote, that SBE became the National Society of Black Engineers (NSBE). The familiar NSBE “N” with lightning bolts became part of the Society’s official National Symbol, representing the premier technical organization for black engineering students and professionals. NSBE was incorporated in Texas as a 501(c)(3) nonprofit organization in 1976. John Cason, also of Purdue, served as the first elected president of NSBE. As the organization grew, Virginia Booth became the first female national chair of NSBE and the first national chair to serve two terms (1978–1980). The NSBE Torch, also part of the National Symbol, represents NSBE members’ everlasting, burning desire to achieve success as engineers in a competitive society and positively affect the quality of life of all people. The lightning bolts represent the striking impact being felt by the society and industry as a result of the contributions and achievements made by the National Society of Black Engineers. NSBE has grown from six to more than 17,000 members, and its annual meeting has blossomed into the Annual Convention, hosting more than 13,000 attendees. NSBE has more than 500 active chapters in the U.S. and abroad: 148 NSBE Jr. (pre-collegiate), 291 collegiate and 84 NSBE Professionals chapters. Headquartered in Alexandria, Va., NSBE offers academic excellence programs, scholarships, leadership training, professional development and access to career opportunities for thousands of members annually and provides opportunities for their success that remain unmatched by any other organization. NSBE’s mission is “to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.” The main goal of the Society’s current 10-year Strategic Plan is to lead the United States to produce 10,000 Black Engineers annually by 2025.',
  },
];
export class ExternalLink extends React.Component {

    _openLink = async () => {
        const { link } = this.props;

        if (await Linking.canOpenURL(link)) {
            Linking.openURL(link);
        }
    }

    render() {
        const { children } = this.props;

        return (
            <TouchableOpacity accessibilityRole='link' onPress={this._openLink}>
                {children}
            </TouchableOpacity>
        );
    }
}
export default class AboutNSBE extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ExternalLink link='https://nsbe.org/home.aspx'>
          <Image
            style={styles.logo}
            source={require('../assets/nsbelogoc.png')}
          />
          </ExternalLink>
          <Text style={{textAlign: 'center', padding: -10}}>Click the logo for more information </Text>
          <Text style={styles.paragraph}>
            With more than 500 chapters and nearly 16,000 active members in the
            U.S. and abroad, the National Society of Black Engineers (NSBE) is
            one of the largest student-governed organizations based in the
            United States. NSBE, a 501(c)(3) nonprofit organization founded in
            1975, supports and promotes the aspirations of collegiate and
            pre-collegiate students and technical professionals in engineering
            and technology. NSBE’s mission is to increase the number of
            culturally responsible Black Engineers who excel academically,
            succeed professionally and positively impact the community.
          </Text>
          <Accordion
            dataArray={dataArray}
            animation={true}
            headerStyle={{ backgroundColor: '#4b71b4' }}
            contentStyle={{ backgroundColor: '#657994' }}
          />
          <Text style={styles.baseText}>
            Come visit us at room {'\n'}
            <Text style={styles.impText}>
              2M17 at Steinman {'\n'}
            </Text>
            EVERYONE IS WELCOME!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
    marginTop: 25,
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Cochin'
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 340,
    resizeMode: 'contain',
    backgroundColor: '#E2E2E2',
    borderRadius: 100 / 2
  },
  impText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 25,
    textAlign: 'center',
  },
});
