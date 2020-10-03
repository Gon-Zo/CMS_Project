package com.gonzo.api.repository;

import com.gonzo.api.domain.PostTemporary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by park031517@gmail.com on 2020-10-2, 금
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Repository
public interface PostTemporaryRepository extends JpaRepository<PostTemporary , Long>{
}
