package com.gonzo.api.repository;

import com.gonzo.api.domain.LikePost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by park031517@gmail.com on 2020-10-3, 토
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Repository
public interface LikePostRepository extends JpaRepository<LikePost , Long> {
}
