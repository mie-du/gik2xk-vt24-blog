import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { toDateTimeString } from '../common/formatHelpers';

function Comment({ comment }) {
  return (
    <ListItem sx={{ mb: 1, borderBottom: `1px solid ${grey[300]}` }}>
      <ListItemText
        primary={
          <Typography
            color="text.secondary"
            component="p"
            fontWeight="bold"
            variant="body1">
            {comment.author} säger:
          </Typography>
        }
        secondary={
          <>
            <Typography variant="body2" component="span">
              {toDateTimeString(comment.createdAt)}
            </Typography>
            <Typography
              sx={{ my: 1, display: 'block' }}
              color="text.primary"
              variant="h4"
              component="span">
              {comment.title}
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              component="span"
              sx={{ display: 'block' }}>
              {comment.body}
            </Typography>
          </>
        }></ListItemText>
    </ListItem>
  );
}

export default Comment;
