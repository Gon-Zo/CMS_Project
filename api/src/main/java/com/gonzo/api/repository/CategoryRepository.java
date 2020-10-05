package com.gonzo.api.repository;

import com.gonzo.api.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by park031517@gmail.com on 2020-10-5, 월
 * Blog : https://zzz-oficial.tistory.com
 * Github : https://github.com/Gon-Zo
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
