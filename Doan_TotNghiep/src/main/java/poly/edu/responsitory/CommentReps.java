package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import poly.edu.model.Comment;

public interface CommentReps extends JpaRepository<Comment,Integer> {
}
