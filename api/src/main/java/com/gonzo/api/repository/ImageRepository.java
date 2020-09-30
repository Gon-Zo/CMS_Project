package com.gonzo.api.repository;

import com.gonzo.api.domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by park031517@gmail.com on 2020-09-29, 화
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Repository
public interface ImageRepository extends JpaRepository<Image , Long> {
}
