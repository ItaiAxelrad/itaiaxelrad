import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const InfoCard = ({ card }) => {
  return (
    <Card variant='outlined'>
      <CardHeader
        action={
          <IconButton href={card.href}>
            <ArrowForwardIcon />
          </IconButton>
        }
        title={card.title}
      />
      <CardContent>
        <Typography variant='body1' color='text.secondary'>
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
