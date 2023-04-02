import Text from 'components/Text';
import { graphql } from 'gatsby';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps): JSX.Element => {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
